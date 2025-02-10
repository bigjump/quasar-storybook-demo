# Quasar + Storybook using TS + Vite

In case this helps anyone else trying to set up Quasar + Storybook (using TS)

**GITHUB REPO**: https://github.com/bigjump/quasar-storybook-demo

- First commit - I just ran npm init quasar
- Second commit - includes the changes required to get a simple demo working
  
### You can see the changes here:

https://github.com/bigjump/quasar-storybook-demo/compare/e8ca641ca8e1665b415d89c08d1a26c820438846..56bf27d47fca198c93dd4e25943b2557eb40c59f#diff-d42715fd3297e575fb61faba39bba1b83739d3fd533a719ccfb0d81f64862b15

### In summary:

Storybook and Quasar require different versions of Vite, so we need to manage it seperately. Steps are:

- Create .storybook folder with preview.ts and main.ts - see Storybook docs about these
- Add storybook commands to package.json scripts
- Add storybook dev dependencies into package.json
- Override the Vite & ViteJs plugin in package.json
- Add vite.config.js
- Create your first storybook story - eg. DemoCard.stories.ts assuming you have a DemoCard.vue component
