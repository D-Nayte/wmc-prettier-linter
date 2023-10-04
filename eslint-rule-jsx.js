module.exports = {
  rules: {
    "react-file-extension": {
      meta: {
        type: "suggestion",
        docs: {
          description: "Ensure React files use the .jsx file extension",
          category: "Best Practices",
          recommended: true,
        },
        fixable: null,
        schema: [],
      },
      create: function (context) {
        return {
          Program: function (node) {
            const codeAsText = context.sourceCode.getText(node);
            const fileName = context.getFilename();

            // just looking for "import React" isnt enough, because it could be a false positive
            // we also want to look for some kind of jsx expressions like <div> or <h1> but we need to be carefull because a string could have <div> in it, in that case we dont want to return an error
            // so we need to check if the string has some kind of jsx expression but not inside a string
            // we can do that by checking if the "codeAsText" has a < and > but not inside a string
            const importsReact = codeAsText.includes("import React");
            const hasJsxExpressions =
              importsReact ||
              (codeAsText.includes("<") &&
                codeAsText.includes(">") &&
                !codeAsText.includes('"<') &&
                !codeAsText.includes('>"'));

            if (hasJsxExpressions && !fileName.endsWith(".jsx")) {
              return context.report({
                node,
                message:
                  "Wrong File Extension. React files should use the **.jsx** file extension.",
              });
            }
            return;
          },
        };
      },
    },
  },
};
