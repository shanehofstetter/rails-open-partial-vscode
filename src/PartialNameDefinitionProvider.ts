import openFile from './openFile'
import {
  ProviderResult,
  TextDocument,
  Position,
  CancellationToken,
  DefinitionProvider,
  Location,
  Uri,
  workspace,
  TextEditor
} from 'vscode'

export default class PartialNameDefinitionProvider implements DefinitionProvider {
  public async provideDefinition(document: TextDocument, position: Position, token: CancellationToken) {
    const partialName = this.getPartiaName(document, position);
    await openFile(this.resolvePartialFilePath(partialName, document.fileName));
    return undefined;
  }

  private getPartiaName(document: TextDocument, position: Position): string {
    return this.getPartialNameFromLine(
      document.lineAt(position.line).text
    )
  }

  private getPartialNameFromLine(line_text): string {
    if (!(/partial/.test(line_text))) { return "" }
    var line_text = line_text.split(" ").filter(function (i) { return i != "" }).join(" ")
    var after_partial = line_text.split(/partial\(|partial\ |partial\: /)[1]
    var first_argument = after_partial.split(/\ |\,/)[0]
    var partial_name = first_argument.replace(/\"|\'|\)|\:/g, "")
    return this.underscorePartialName(partial_name)
  }

  private underscorePartialName(partial_name): string {
    return partial_name.split("/").map(function (item, index, array) {
      return index == array.length - 1 ? "_" + item : item
    }).join("/")
  }

  private resolvePartialFilePath(partialName: string, currentFileName: string): string {
    const currentFileEnding = currentFileName.substring(currentFileName.indexOf("."));
    if (partialName.includes("/")) {
      return `${workspace.rootPath}/app/views/${partialName}${currentFileEnding}`
    }
    const currentDirectory = currentFileName.substring(0, currentFileName.lastIndexOf("/") + 1);
    return `${currentDirectory}/${partialName}${currentFileEnding}`;
  }
}
