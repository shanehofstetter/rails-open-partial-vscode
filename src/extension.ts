'use strict';
import * as vscode from 'vscode'
import PartialNameDefinitionProvider from './PartialNameDefinitionProvider'

export function activate(context: vscode.ExtensionContext) {
  console.log('activated extension "rails-open-partial"');
  const HAML = { language: 'haml', scheme: 'file' };
  const ERB = { language: 'erb', scheme: 'file' };
  context.subscriptions.push(vscode.languages.registerDefinitionProvider(HAML, new PartialNameDefinitionProvider));
  context.subscriptions.push(vscode.languages.registerDefinitionProvider(ERB, new PartialNameDefinitionProvider));
}

export function deactivate() {
}