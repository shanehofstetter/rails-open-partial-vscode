'use strict';
import * as vscode from 'vscode'

const { window }    = vscode
const { workspace } = vscode
const { rootPath }  = workspace

async function openFileInTap(fileName){
  try{
    const textDocument = await workspace.openTextDocument(`${rootPath}/${fileName}`)
  } catch(error) {
    throw new Error('Could not open file!')
  }
  const editor = window.showTextDocument(textDocument)
}

export default openFileInTap