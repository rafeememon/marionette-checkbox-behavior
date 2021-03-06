marionette-checkbox-behavior
============================

[![NPM version](https://img.shields.io/npm/v/marionette-checkbox-behavior.svg)](https://www.npmjs.org/package/marionette-checkbox-behavior)
![Bower version](https://img.shields.io/bower/v/marionette-checkbox-behavior.svg)
[![Build Status](https://travis-ci.org/rafeememon/marionette-checkbox-behavior.svg)](https://travis-ci.org/rafeememon/marionette-checkbox-behavior)

## Description

This behavior provides two-way value binding between a DOM `<input>` checkbox element of a [Backbone.Marionette](http://marionettejs.com/) view with the value of a [Backbone](http://backbonejs.org/) model attribute. The checked status of the element and the model attribute are updated when either the user checks/unchecks or the attribute is changed.

## Usage

This library is compatible with CommonJS and AMD loaders. If included in a `<script>` tag, the behavior is exported as `CheckboxBehavior`.

See Marionette's [documentation](http://marionettejs.com/docs/marionette.behaviors.html) for including behaviors into views. The options for this behavior are:

- **selector**: (required) A jQuery selector to an `<input>` checkbox element within the view
- **modelField**: (required) The model attribute name

## Compatibility

- [Backbone.Marionette](http://marionettejs.com/) v2.0.0 and higher

## License

The MIT License (MIT)

Copyright (c) 2015 Rafee Memon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

