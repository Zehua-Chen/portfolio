# Personal Homepage

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Gatsby](https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Development

### Get Started

- Start development server
  ```
  yarn start
  ```
- Run linter on project
  ```
  yarn lint
  ```
- Create build
  ```
  yarn build
  ```
- Publish site to [Netlify](https://www.netlify.com/)
  ```
  git push release
  ```

### Git

- Main branch: `main`: changes should be merged to main branch
- Production branch: `release`; as soon as changes are pushed to `release`,
  [Netlify](https://www.netlify.com/) will rebuild and then publish the site
  - Only `main` should be used to add changes to `release`
