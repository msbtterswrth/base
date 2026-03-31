# Node Block
Node Block is a modern, streamlined approach to a familiar Drupal pattern: rendering parts of the current node in block regions.

It serves two key roles:

- A theme-first alternative to modules like Entity Block
- A modern port of the legacy Nodeblock module, updated for current Drupal standards


## Features
- Automatically loads the current node from the route
- Renders all non-empty fields
- Supports custom theme suggestions per block instance
- Works with Twig templates like

## When to use Node Block
Use Node Block when:

- You want to render parts of the current node in a region
- You prefer Twig-driven layouts over UI configuration
- You want fine control over fields without creating view modes
- You are building a design-system-driven Drupal site

### Why use Node Block instead of Entity Block?
Entity Block is a powerful and flexible module for placing specific entities as blocks. Node Block focuses on a different, more theme-oriented use case.

#### Key differences

1. Context-aware by default, which is ideal for layouts that should adapt to whatever node is being viewed.

Node Block: Automatically uses the current node from the route
Entity Block: Requires selecting a specific entity

2. Theme-first approach which is a better fit for teams working primarily in SDC, Twig and design systems.

Node Block: Designed around Twig templates and theme suggestions
Entity Block: Focused on UI configuration and view modes

3. Field-level flexibility avoids the need to create and manage multiple view modes.

Node Block: Exposes fields directly for granular control in templates
Entity Block: Renders entities via view modes

4. Minimal configuration optimizes for fast iteration during theming.

Place block → (optional) add theme suggestion → create Twig template

## Requirements
- Drupal 10/11

## Installation
Enable the module like any other Drupal module, either via UI or Drush.

## Usage
1. Add the "Node Block" block to a region
2. Optionally configure a theme suggestion
3. Create a Twig template:
   block--node-block--<suggestion>.html.twig

Example:
block--node-block--hero.html.twig

## Theming
Fields are available via:
- `content.field_*`s
- `node` (via preprocess hook)

## Limitations
- Only works on routes with a node parameter