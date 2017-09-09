import openFileInTap from './openFileInTap'
import { ProviderResult } from 'vscode'

export default class PartialNameDefinitionProvider{
  async provideDefinition(document: TextDocument, position: Position, token: CancellationToken){
    const response = await openFileInTap("source/title.html.erb")
    return new ProviderResult
  }
}
