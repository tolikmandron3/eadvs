{
  "root": true,
  "ignorePatterns": [],
  "plugins": ["@nrwl/nx"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nrwl/nx/typescript"],
      "rules": {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-empty-function": "off",
        "eslint-disable-next-line no-empty": "off",
        "no-empty": "off"
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/javascript"],
      "rules": {}
    }
  ],
  "globals": {
    "JSX": true
  }
}
