gitbook-plugin-sectionx
====

<!--sec data-title="Introduction" data-id="intro" ces-->
This page is implemented using the two plugins developed by me: ```gitbook-plugin-sectionx```, please check the [Github repo](https://github.com/ymcatar/gitbook-plugin-sectionx) for the plugin.

The source code for this page is available [here](https://raw.githubusercontent.com/ymcatar/gitbook-test/master/testing_sectionx.md).
<!--endsec-->

<!--sec data-title="Example" data-id="section1" ces-->
This is a section that is by default visible (with ```data-show=true```). You can toggle this with the button in the title. The next section is hidden by default, you can add a custom button to toggle it (see GitHub for the syntax).

<button class="section" target="section2" show="Show the next  hidden section" hide="Hide the next hidden section"></button>
<!--endsec-->

<!--sec data-title="Hidden Section" data-id="section2" data-show=false ces-->
This section can only be opened with that button.
<!--endsec-->