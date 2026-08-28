import type { APIRoute } from "astro";
import { SITE } from "@canmyagentuse/catalog";
import { xmlResponse } from "../lib/security";

export const GET: APIRoute = () =>
  xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${SITE.name}</ShortName>
  <Description>Search agent capabilities, exact harness surfaces, and specifications.</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image height="32" width="32" type="image/svg+xml">${SITE.url}${SITE.markPath}</Image>
  <Url type="text/html" template="${SITE.url}/search?q={searchTerms}" />
</OpenSearchDescription>`);
