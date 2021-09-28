---
title: fm-tab
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<div>
    <fm-card>
        <fm-tab-group for="#tabs">
            <fm-tab show for="home"> Home </fm-tab>
            <fm-tab for="config">Config</fm-tab>
            <fm-tab for="users">Users</fm-tab>
        </fm-tab-group>
        <fm-tab-group id="tabs">
            <section slot="home">[home]</section>
            <section slot="config">[config]</section>
            <section slot="users">[users]</section>
        </fm-tab-group>
    </fm-card>
</div>
```