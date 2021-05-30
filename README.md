# Personal Homepage

## Development

### Get Started

```
yarn start
```

Start development server

```
yarn build
```

Create build

```
git push release
```

Publish site to [Netlify](https://www.netlify.com/)

### Git

- Main branch: `main`: changes should be merged to main branch
- Production branch: `release`; as soon as changes are pushed to `release`,
  [Netlify](https://www.netlify.com/) will rebuild and then publish the site
  - Only `main` should be used to add changes to `release`
