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
    const response = await openFileInTap(partialName)
    return undefined;
  }

  getPartiaName(document: TextDocument, position: Position){
    return this.getPartialNameFromLine(
      document.lineAt(position.line).text
    )
  }

  getPartialNameFromLine(line_text){
    return "source/title.html.erb"
  }
}
