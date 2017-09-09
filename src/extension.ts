'use strict';
import * as vscode from 'vscode'
import openFileInTap from './openFileInTap'

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