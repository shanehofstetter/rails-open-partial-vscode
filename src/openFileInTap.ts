'use strict';
import * as vscode from 'vscode'

const { window }    = vscode
const { workspace } = vscode
const { rootPath }  = workspace

async function openFileInTap(fileName){
  try{
    const textDocument = await workspace.openTextDocument(`${rootPath}/${fileName}`)
    const editor = window.showTextDocument(textDocument)
  } catch(error) {
    throw new Error('Could not open file!')
  }
}

export default openFileInTap