<h1>Email template</h1>

## Table Of Content

- [Table Of Content](#table-of-content)
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [License](#license)

## About

This package contains a simple email template that you may use with any framework or library.
All you have to do is install the email-template package, and you instantly have access to all email templates, saving you from having to complete all the work and install all dependencies the old-fashioned way.

## Installation

```
npm install email-template
```

```sh
yarn add email-template
```

## Usage

First of all, you need to import the email template function from the package.

```js
const { emailTemplate } = require("email-template");
```

Then, you can use the emailTemplate function to generate the email template you want.

```js
const email = sendMail(email, fullName, authEmail, authPassword)
```
This function takes 4 parameters:
- email: the email of the user you want to send the email to.
- fullName: the full name of the user you want to send the email to.
- authEmail: this email you will use it for two things:
  - you will use it as sender address.
  - you will use it to login to your smtp server.
- authPassword: the password of smtp server.

And all you have to do is call the function and pass the parameters you want.

## Author

👤 **Abdelhaq laachari** : I'm a Full stack javascript student based in Morocco, I'm 23 years. As a passionate developer who adores code, open source, and the web platform, that is how I would characterize myself. In addition to studying, I enjoy making and contributing to open source projects. That enables me to pick up a ton of fresh knowledge, progress as a developer, and assist other open source initiatives. I also like to write about technological topics on my blog.

linkedin: [@Abdelhaq Laachari](https://www.linkedin.com/in/abdelhaq-laachari/)
<br/>
medium: [@Abdelhaq Laachari](https://medium.com/@abdelhaqlaachari)

## License


The MIT License (MIT)

Copyright (c) 2022 Abdelhaq Laachari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files <email-template>, to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.