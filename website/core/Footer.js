/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <div>
              <a href={this.docUrl('introduction/getting-started')}>
                Getting Started
              </a>
            </div>

            <div>
              <a href={this.docUrl('api')}>API Reference</a>
            </div>
          </div>
          <div>
            <h5>More</h5>
            <div>
              <a href="https://github.com/helpscout/cyan">GitHub</a>
            </div>
            <div>
              <a
                className="github-button"
                href={this.props.config.repoUrl}
                data-icon="octicon-star"
                data-count-href="/helpscout/cyan/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub"
              >
                Star
              </a>
            </div>
          </div>
        </section>
        <section className="copyright">
          Copyright {'©'} {new Date().getFullYear()}.{' '}
          <a href="https://jonquach.com/">Q</a> +{' '}
          <a href="https://www.helpscout.com/">Help Scout</a>.
        </section>
      </footer>
    )
  }
}

module.exports = Footer
