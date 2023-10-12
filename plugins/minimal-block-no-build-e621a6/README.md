# Minimal Gutenberg Block (No Build)

This example contains a plugin that register a minimal block that has been defined using plain javascript so it doesn't needs a `build` process (to convert the JSX syntax into JS code that browsers can understand).

## Start Guide

#### 1. Install dependencies

Check the [Repo Commands > Dependencies](../../DEVELOPMENT.md#dependencies) instructions for this repo

#### ~~2. Generate the build~~

This example doesn't require any `build` process

#### 3. Use it in a WordPress

<details>
  <summary><em>If you have a local WordPress installation already running, you can clone the repo inside the <code>plugins</code> folder of that installation and check the example there</em></summary>
<br>  
<p>If you do that, you'll need to do the following</p>
<ul>
<li>Remove any <code>node_modules</code> folder inside this folder</li>
<li>Run <code>npm install</code> to install the dependencies</li>
<li>Run <code>npm build</code> to generate the "build" version of the blocks</li>
<li>Activate the plugin in your own WordPress installation</li>
<ul>
</details>
<br>  
If not, check the [WordPress Local Development Environment](../../DEVELOPMENT.md#wordpress-local-development-environment) instructions for this repo.

At this point you should be able to insert the "Minimal Gutenberg Block" block into any post (after activating the plugin "Minimal Gutenberg Block Plugin") of your WordPress installation, and see how it behaves in the frontend when published.

