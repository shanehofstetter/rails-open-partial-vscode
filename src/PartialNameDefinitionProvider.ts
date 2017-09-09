import openFileInTap from './openFileInTap'
import {
  ProviderResult,
  TextDocument,
  Position,
  CancellationToken,
  DefinitionProvider,
  Location,
  Uri
 } from 'vscode'

export default class PartialNameDefinitionProvider implements DefinitionProvider{
  async provideDefinition(document: TextDocument, position: Position, token: CancellationToken) {
    const partialName = this.getPartiaName(document, position)
    const response = await openFileInTap(`source/${partialName}.html.erb`)
    return undefined;
  }

  getPartiaName(document: TextDocument, position: Position){
    return this.getPartialNameFromLine(
      document.lineAt(position.line).text
    )
  }

  getPartialNameFromLine(line_text){
    if (!(/partial/.test(line_text))) { return "" }
    var line_text = line_text.split(" ").filter(function(i){ return i != "" }).join(" ")
    var after_partial = line_text.split(/partial\(|partial\ /)[1]
    var first_argument = after_partial.split(/\ |\,/)[0]
    var partial_name = first_argument.replace(/\"|\'|\)|\:/g, "")
    return partial_name
  }
}
