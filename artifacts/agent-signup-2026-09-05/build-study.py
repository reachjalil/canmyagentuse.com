"""Reproduce this dated snapshot from its pinned catalog commit; render SVG/CSV."""
import collections
import csv
import hashlib
import html
import json
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = pathlib.Path(__file__).resolve().parent
COMMIT = '309cd23b4cb51ca80a983e62cf61dc5c26ba1b7c'
labels = {'agent-ready': 'Agent can do it', 'human-step': 'Human step',
          'conditional': 'With conditions', 'unknown': 'Not verified'}
paths = subprocess.check_output(['git', 'ls-tree', '-r', '--name-only', COMMIT,
                                 'content/products/en'], cwd=ROOT, text=True).splitlines()
records = []
for path in paths:
    raw = subprocess.check_output(['git', 'show', f'{COMMIT}:{path}'], cwd=ROOT)
    d = json.loads(raw.decode().split('---', 2)[1])
    actions = {a['id']: a for a in d['actions']}
    signup = actions['sign-up']
    records.append({'title': d['title'], 'slug': d['slug'], 'order': d.get('order', 0),
                    'guide': f"https://canmyagentuse.com/products/{d['slug']}",
                    'sourceFile': path, 'sha256': hashlib.sha256(raw).hexdigest(),
                    'signup': signup, 'use': actions['use-product'],
                    'signupSources': [s for s in d['sources'] if s['id'] in signup['sourceIds']]})
records.sort(key=lambda r: r['order'])
counts = {k: dict(collections.Counter(r[k]['status'] for r in records)) for k in ['signup', 'use']}
assert len(records) == 22
assert counts['signup'] == {'conditional': 4, 'human-step': 5, 'unknown': 13}
assert counts['use'] == {'agent-ready': 17, 'conditional': 5}
snapshot = {'date': '2026-09-05', 'sourceCommit': COMMIT, 'sampleSize': len(records),
            'basis': 'Published catalog classifications, not live signup tests or a representative market survey.',
            'counts': counts, 'records': records}
(OUT / 'catalog-snapshot.json').write_text(json.dumps(snapshot, ensure_ascii=False, indent=2)+'\n')
with (OUT / 'signup-classifications.csv').open('w') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['product', 'signup_status', 'signup_label', 'signup_summary', 'use_status', 'guide', 'signup_sources'])
    for r in records:
        writer.writerow([r['title'], r['signup']['status'], labels[r['signup']['status']],
                         r['signup']['summary'], r['use']['status'], r['guide'],
                         ' | '.join(s['href'] for s in r['signupSources'])])
table = ['| Product guide | Signup classification | What the record establishes |', '| --- | --- | --- |']
for r in records:
    table.append(f"| [{r['title']}](/products/{r['slug']}) | {labels[r['signup']['status']]} | {r['signup']['summary']} |")
(OUT / 'snapshot-table.md').write_text('\n'.join(table)+'\n')

svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1350" viewBox="0 0 2400 1350">',
       '<rect width="2400" height="1350" fill="#f3f0e7"/>']
def text(x, y, value, size=40, color='#26231e', weight=400):
    svg.append(f'<text x="{x}" y="{y}" font-family="Arial, sans-serif" font-size="{size}" fill="{color}" font-weight="{weight}">{html.escape(value)}</text>')
def rect(x, y, w, h, fill, rx=0):
    svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" rx="{rx}"/>')
text(110, 102, 'CAN MY AGENT USE', 34, weight=700)
text(1470, 102, '22 PRODUCT GUIDES  /  05 SEP 2026', 30)
rect(110, 140, 2180, 2, '#d2cab9')
text(110, 252, 'Agents can use the tools.', 102, weight=700)
text(110, 365, 'Getting started is the gap.', 102, '#90532f', 700)
text(110, 433, 'A snapshot of documented access — not a live signup benchmark.', 39)
rect(110, 502, 1045, 365, '#e4e9df', 16)
rect(1180, 502, 1110, 365, '#e9e1d4', 16)
text(155, 576, 'USEFUL WORK AFTER SETUP', 32, '#42553b', 700)
text(155, 755, '17 / 22', 164, '#324a30', 700)
text(155, 818, 'guides marked “Agent can do it”', 39)
text(1225, 576, 'SIGNUP / ACCOUNT CREATION', 32, '#794a31', 700)
text(1225, 755, '0 / 22', 164, '#794a31', 700)
text(1225, 818, 'guides marked “Agent can do it”', 39)
text(110, 945, 'THE SIGNUP BREAKDOWN', 30, weight=700)
colors = [('human-step', 5, '#8d5737', '5 human step'), ('conditional', 4, '#b79453', '4 with conditions'), ('unknown', 13, '#c9c5ba', '13 not verified')]
x = 110
for key, count, color, label in colors:
    w = 2180 * count / len(records)
    rect(x, 982, w-5, 30, color, 3)
    text(x, 1076, label, 37, weight=700)
    x += w
text(110, 1160, '“With conditions” includes previews, existing-account provisioning and a local-file route.', 33)
text(110, 1212, 'Not verified means unknown, not impossible. This small catalog sample is not the whole market.', 33)
rect(110, 1256, 2180, 2, '#d2cab9')
text(110, 1310, 'SOURCE + ALL 22 RECORDS: canmyagentuse.com/agent-signup', 30, weight=700)
text(1690, 1310, 'No live signup tests performed.', 28)
svg.append('</svg>')
(OUT / 'agent-signup.svg').write_text('\n'.join(svg))
print(json.dumps({'sample': len(records), 'counts': counts, 'commit': COMMIT}))
