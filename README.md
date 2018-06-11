# Rails Open Partial

Open partial view files (*.haml, *.erb) with go to definition
## Features

open partial file in other tab using go to definition (F12)
## Requirements

* extension file html.haml or html.erb
* partial method and partial name in the same line (e.g. `render partial: "mypartial"`)
* partial file must begin with underscore (e.g. "_partial.html.erb")

## Known Issues

* show message error with partial not found

## Release Notes
### 0.0.3
