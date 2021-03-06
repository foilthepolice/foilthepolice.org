# Notice for record request template implementers

When adding templates, please ensure you are using UTF-8 encoding. Please do not use UTF-8-BOM or "ANSI", as this may cause problems when rendering the template.

## Fields

| Key             | Required | Type     | Description                                                                         |
| --------------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| title           | yes      | String   | Request of some record                                                              |
| goal            | yes      | String   | Description of what this record requesst serves                                     |
| state           | yes      | String   | Lowercase abbreviation of state                                                     |
| categories      | yes      | String[] | Category constant that can be filtered on. See below for possible values            |
| request         | yes      | String   | The template text that will be copied, edited, and sent                             |


## File naming conventions

Please use dashes in place of spaces creating new markdown files. For example:

```
data/templates/nj/request-use-of-force-reports.md
data/templates/ny/request-citizen-complaints.md
```

## Categories

When listing a template, the category tags should be one of the following:
`budget`, `citizenComplaint`, `performanceMeasurements`, `policeUnionContracts`, `useOfForce`


## Example template

```
---
title: <request for records>
goal: <what these records can tell>
state: <state abbr>
categories:
- useOfForce
request: |
  To whom it may concern

  A template

  [INSERT YOUR NAME]
---
```