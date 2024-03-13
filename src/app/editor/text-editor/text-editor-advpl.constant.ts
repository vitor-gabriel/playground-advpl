import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
import { PoCodeEditorRegisterable } from '@po-ui/ng-code-editor';

declare const monaco: any;

/** Definição da lista de sugestões para o autocomplete.
 *
 * > A função `provideCompletionItems` precisa ser exportada para ser compatível com AOT.
 *
 * Documentação: https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
 */
export function provideCompletionItems() {
    const suggestions: Array<PoCodeEditorRegisterableSuggestion> = [
        {
            label: 'advpl',
            insertText: '#advpl language'
        },
        {
            label: 'server',
            insertText: 'server ${1:ip}'
        }
    ];

    return { suggestions };
}

/** Definindo propriedades de uma nova sintaxe. */
export const customRegister: PoCodeEditorRegisterable = {
    language: 'advpl',
    options: {
        ignoreCase: true,
        keywords: [
            'user', 'function', 'for', 'new', 'switch', 'assert', 'goto', 'do',
            'if', 'this', 'break', 'protected', 'throw', 'else',
            'enum', 'return', 'catch', 'try', 'interface', 'static', 'class',
            'finally', 'self', '_Super', 'while', '.T.', '.F.', 'boolean', 'double', 'byte', 'int', 'short', 'char', 'void', 'long', 'float'
        ],
        operators: ['=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
            '.And.', '.Or.', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
            '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
            '%=', '<<=', '>>=', '>>>=', '{', '}', '(', ')', '[', ']', '?', ':'
        ],
        symbols: new RegExp('[=><!~?:&|+\\-*\\/\\^%]+'),
        escapes: new RegExp(`\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})`),
        tokenizer: {
            root: [
                [`[a-z_$][\\w$]*`, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
                { include: '@whitespace' },
                [`\\d*\\.\\d+([eE][\\-+]?\\d+)?`, 'number.float'],
                [`0[x][0-9a-fA-F]+`, 'number.hex'],
                [`\\d+`, 'number'],
                [`[;,.]`, 'delimiter'],
                [`\"([^\"\\\\]|\\\\.)*$`, 'string.invalid'],
                [`\"`, { token: 'string.quote', bracket: '@open', next: '@string' }],
                [`'[^\\\\']'`, 'string'],
                [`'`, 'string.invalid']
            ],
            comment: [
                [`[^\\/*]+`, 'comment'],
                [`[\\/*]`, 'comment'],
                [`[\\#.*]`, 'comment']
            ],
            string: [
                [`[^\\\\\"\\$]+`, 'string'],
                [`\\$`, 'string.interpolated', '@interpolated'],
                [`\\\\.`, 'string.escape.invalid'],
                [`\"`, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            whitespace: [
                [`[ \\t\\r\\n]+`, 'white'],
                [`\\/\\/.*$`, 'comment'],
                [`\\#.*$`, 'comment']
            ],
            interpolated: [
                [`[{]`, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
                ['', '', '@pop']
            ]
        }
    },
    suggestions: { provideCompletionItems: provideCompletionItems }
};