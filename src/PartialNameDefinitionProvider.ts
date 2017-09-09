import openFileInTap from './openFileInTap'

export default class PartialNameDefinitionProvider{
  provideDefinition(document: TextDocument, position: Position, token: CancellationToken){
    console.log("title.html.erb")
    debugger;
    // await openFileInTap("source/title.html.erb")
  }
}
