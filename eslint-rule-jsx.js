module.exports = {
    rules: {
      "react-file-extension": {
        meta: {
          type: "suggestion",
          docs: {
            description: "Ensure React files use the .jsx file extension",
            category: "Best Practices",
            recommended: true
          },
          fixable: null,
          schema: []
        },
        create: function(context) {
          return {
            Program: function(node) {
              const fileName = context.getFilename();
              if (!fileName.endsWith(".jsx")) {
                context.report({
                  node,
                  message: "Wrong File Extension. React files should use the **.jsx** file extension."
                });
              }
            }
          };
        }
      }
    }
  };
  