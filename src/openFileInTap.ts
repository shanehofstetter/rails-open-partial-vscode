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

export default openFileInTap