'use strict';
import * as vscode from 'vscode'

const { window }    = vscode
const { workspace } = vscode
const { rootPath }  = workspace

async function openFileInTap(fileName){
  const textDocument = await workspace.openTextDocument(`${rootPath}/${fileName}`)
  if (!textDocument) { throw new Error('Could not open file!') }
  const editor = window.showTextDocument(textDocument)
  if (!editor) { throw new Error('Could not show document!') }
}

const run = async () => {
  try {
    await openFileInTap("source/title.html.erb")
  } catch {
  }
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "middleman-partial-trasporter" is now active!')
  let disposable = vscode.commands.registerCommand('extension.sayHello', run)
  context.subscriptions.push(disposable)
}

export function deactivate() {
}