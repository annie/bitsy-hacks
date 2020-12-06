# [15.1.0](https://github.com/seleb/bitsy-hacks/compare/v15.0.4...v15.1.0) (2020-12-06)


### Features

* **transitions:** add `glazyOptions` to `hackOptions` ([4f18e34](https://github.com/seleb/bitsy-hacks/commit/4f18e34639acb98d7b19f3c5ab3b53c842708da9))

## [15.0.4](https://github.com/seleb/bitsy-hacks/compare/v15.0.3...v15.0.4) (2020-12-06)


### Bug Fixes

* **character portraits animated:** detect base64 gif ([a96d73d](https://github.com/seleb/bitsy-hacks/commit/a96d73d81601b477f1219b793babb0534a04e3bd))

## [15.0.3](https://github.com/seleb/bitsy-hacks/compare/v15.0.2...v15.0.3) (2020-12-03)


### Bug Fixes

* **canvas replacement:** add guard around missing functions in hack options ([b646302](https://github.com/seleb/bitsy-hacks/commit/b646302087ff0cd16d1bfe114e553098673d1582))

## [15.0.2](https://github.com/seleb/bitsy-hacks/compare/v15.0.1...v15.0.2) (2020-11-14)


### Bug Fixes

* `npm upgrade` ([09e6023](https://github.com/seleb/bitsy-hacks/commit/09e60234b0f9d5899b983a6ef06da3d66d9d07e6))

## [15.0.1](https://github.com/seleb/bitsy-hacks/compare/v15.0.0...v15.0.1) (2020-09-24)


### Bug Fixes

* update docs ([e1bd9f1](https://github.com/seleb/bitsy-hacks/commit/e1bd9f16add5a5a8d35781425f53fc42d362860f))

# [15.0.0](https://github.com/seleb/bitsy-hacks/compare/v14.0.0...v15.0.0) (2020-09-11)


### Bug Fixes

* logic operators not working in 7.x ([7c034a4](https://github.com/seleb/bitsy-hacks/commit/7c034a430d507f1109b6c9d8ebbc5de1695dbfcc)), closes [#168](https://github.com/seleb/bitsy-hacks/issues/168)
* remove "and not" and "or not" operators ([ffd7b81](https://github.com/seleb/bitsy-hacks/commit/ffd7b811f251a968cf95a4be532dea3b8528754f))


### BREAKING CHANGES

* removed "and not" and "or not" operators from logic operators extended hack

# [14.0.0](https://github.com/seleb/bitsy-hacks/compare/v13.5.2...v14.0.0) (2020-09-05)


### Features

* add support for multiple followers (with option for stack/chain) ([#170](https://github.com/seleb/bitsy-hacks/issues/170)) ([675f713](https://github.com/seleb/bitsy-hacks/commit/675f71369d2f7adc4baae3ed08841ed38d638417))


### BREAKING CHANGES

* this changes the `follower` export to `followers`, since it's now a list

## [13.5.2](https://github.com/seleb/bitsy-hacks/compare/v13.5.1...v13.5.2) (2020-08-30)


### Bug Fixes

* sprite effects resetting after title text ([d6f147a](https://github.com/seleb/bitsy-hacks/commit/d6f147a01a5c0bfc218aa322155ee550222e11ab))

## [13.5.1](https://github.com/seleb/bitsy-hacks/compare/v13.5.0...v13.5.1) (2020-08-30)


### Bug Fixes

* reset sprite effects on game reset ([c20accd](https://github.com/seleb/bitsy-hacks/commit/c20accd5e6d18f20445dd77ea8a1ffb7fb3da81a))

# [13.5.0](https://github.com/seleb/bitsy-hacks/compare/v13.4.3...v13.5.0) (2020-08-30)


### Features

* add modulo (`%`) to extended logic operators ([1fa9d61](https://github.com/seleb/bitsy-hacks/commit/1fa9d611ab8a01b38dc9a87acfc5af8fac329710))

## [13.4.3](https://github.com/seleb/bitsy-hacks/compare/v13.4.2...v13.4.3) (2020-08-30)


### Bug Fixes

* follower hack for 7.2 ([890d941](https://github.com/seleb/bitsy-hacks/commit/890d941ba0c9f26860cd7826807b9ed73af1047e))

## [13.4.2](https://github.com/seleb/bitsy-hacks/compare/v13.4.1...v13.4.2) (2020-08-30)


### Bug Fixes

* upgrade dependencies ([1bfa52a](https://github.com/seleb/bitsy-hacks/commit/1bfa52a79d2718928c8c54cf983fd4eeef6ecd7c))

## [13.4.1](https://github.com/seleb/bitsy-hacks/compare/v13.4.0...v13.4.1) (2020-08-22)


### Bug Fixes

* add note about free to use server ([47e3971](https://github.com/seleb/bitsy-hacks/commit/47e39713692a905d01aedae7138b0930798ccf34))
* more typos ([35e9532](https://github.com/seleb/bitsy-hacks/commit/35e9532db08c6a165f8ca163c53c3e018884322e))
* typo ([e48b04b](https://github.com/seleb/bitsy-hacks/commit/e48b04b78b2590a3e1702768ca2cb71e99dee4d4))

# [13.4.0](https://github.com/seleb/bitsy-hacks/compare/v13.3.7...v13.4.0) (2020-08-21)


### Features

* add sprite effects hack ([#165](https://github.com/seleb/bitsy-hacks/issues/165)) ([0de423a](https://github.com/seleb/bitsy-hacks/commit/0de423a8cc9c753525dfe93b8d0647b7647520c8))

## [13.3.7](https://github.com/seleb/bitsy-hacks/compare/v13.3.6...v13.3.7) (2020-08-06)


### Bug Fixes

* more thorough linting ([#164](https://github.com/seleb/bitsy-hacks/issues/164)) ([eda5209](https://github.com/seleb/bitsy-hacks/commit/eda520968693d9aad1a6fde7d1e8ff8577a81492))

## [13.3.6](https://github.com/seleb/bitsy-hacks/compare/v13.3.5...v13.3.6) (2020-08-01)


### Bug Fixes

* use `postversion` instead of `prepack` ([cc38583](https://github.com/seleb/bitsy-hacks/commit/cc38583332dca43e3c0d7ab939ffa4866a11d0c7))

## [13.3.5](https://github.com/seleb/bitsy-hacks/compare/v13.3.4...v13.3.5) (2020-08-01)


### Bug Fixes

* explicit auto versioning ([4f7914f](https://github.com/seleb/bitsy-hacks/commit/4f7914f52c83463154933dfafb2c8ec5de885b6e))

## [13.3.4](https://github.com/seleb/bitsy-hacks/compare/v13.3.3...v13.3.4) (2020-08-01)


### Bug Fixes

* ignore duplicate injects ([#163](https://github.com/seleb/bitsy-hacks/issues/163)) ([dd696a9](https://github.com/seleb/bitsy-hacks/commit/dd696a919cef65f8b104daadfde1c7df2b8d32f1))

## [13.3.3](https://github.com/seleb/bitsy-hacks/compare/v13.3.2...v13.3.3) (2020-08-01)


### Bug Fixes

* remove extra `Now` from dual dialog tag call ([#162](https://github.com/seleb/bitsy-hacks/issues/162)) ([a4ad2a6](https://github.com/seleb/bitsy-hacks/commit/a4ad2a62eb5ff561ffb92c1a834b89b936dd818d))

## [13.3.2](https://github.com/seleb/bitsy-hacks/compare/v13.3.1...v13.3.2) (2020-07-24)


### Bug Fixes

* dialog tag not parsing `(tag "")` correctly ([#161](https://github.com/seleb/bitsy-hacks/issues/161)) ([7206644](https://github.com/seleb/bitsy-hacks/commit/72066447b0b5dec6341d490d459590bc04c662c1))

## [13.3.1](https://github.com/seleb/bitsy-hacks/compare/v13.3.0...v13.3.1) (2020-07-24)


### Bug Fixes

* setting same portrait twice in a row causing issues ([b7b55ac](https://github.com/seleb/bitsy-hacks/commit/b7b55ac9a73a99da0ac637ab266ce0dd2d76ee28))

# [13.3.0](https://github.com/seleb/bitsy-hacks/compare/v13.2.7...v13.3.0) (2020-07-24)


### Features

* add `dialogOnly` option to allow portraits outside of dialog ([#160](https://github.com/seleb/bitsy-hacks/issues/160)) ([1611831](https://github.com/seleb/bitsy-hacks/commit/161183145e9292d94b928edc1639e4602edf7b1c))

## [13.2.7](https://github.com/seleb/bitsy-hacks/compare/v13.2.6...v13.2.7) (2020-07-16)


### Bug Fixes

* package maintenance ([#159](https://github.com/seleb/bitsy-hacks/issues/159)) ([3781281](https://github.com/seleb/bitsy-hacks/commit/378128193ca9dc634decf25617e14f8de063a29e))

## [13.2.6](https://github.com/seleb/bitsy-hacks/compare/v13.2.5...v13.2.6) (2020-07-11)


### Bug Fixes

* ci ([9778dfb](https://github.com/seleb/bitsy-hacks/commit/9778dfbe0649f5eaa9547278f457deb285a2b75b))

## [13.2.5](https://github.com/seleb/bitsy-hacks/compare/v13.2.4...v13.2.5) (2020-07-11)


### Bug Fixes

* itch channel name ([ad93e71](https://github.com/seleb/bitsy-hacks/commit/ad93e716d67c82283948e259665abeff5fa2ad6a))

## [13.2.4](https://github.com/seleb/bitsy-hacks/compare/v13.2.3...v13.2.4) (2020-07-11)


### Bug Fixes

* test release ([b38bf8a](https://github.com/seleb/bitsy-hacks/commit/b38bf8aaa2d911fb92cb9e98b7165844015f87f6))

## [13.2.3](https://github.com/seleb/bitsy-hacks/compare/v13.2.2...v13.2.3) (2020-07-03)


### Bug Fixes

* include comment about character portraits taining canvas ([3cd5ecd](https://github.com/seleb/bitsy-hacks/commit/3cd5ecd51b21de3168c265ebaa8332557d4ff342))

## [13.2.2](https://github.com/seleb/bitsy-hacks/compare/v13.2.1...v13.2.2) (2020-06-21)


### Bug Fixes

* improve readme ([6a66fc7](https://github.com/seleb/bitsy-hacks/commit/6a66fc72e215f631704e2fc3589d51693daa71bc))
* test automated release ([18f92f7](https://github.com/seleb/bitsy-hacks/commit/18f92f7521c65ddfb091062c3098e0ee3d5d6bfd))
