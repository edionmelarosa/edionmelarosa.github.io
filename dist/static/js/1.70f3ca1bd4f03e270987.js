webpackJsonp([1],{FvBs:function(e,t,s){e.exports=s.p+"static/img/github-all-workflows.06fc1f7.jpg"},"N//e":function(e,t,s){e.exports=s.p+"static/img/github-settings-secret-deployment-key.8ffbe79.jpg"},XOOE:function(e,t){},ccu5:function(e,t,s){e.exports=s.p+"static/img/github-successfull-deployment.29d99bc.jpg"},dhHV:function(e,t,s){e.exports=s.p+"static/img/github-pages-deployment-branch.b18c249.jpg"},g92M:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"main-content"},[e._m(1),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("Creating a workflow")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("pre",[e._v("name: Deploy to Github Pages\non: \npush:\n    branches:\n    - master\njobs:\nbuild-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout 🛎️\n        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.\n        with:\n        persist-credentials: false\n\n    - name: Install SSH Client 🔑\n        uses: webfactory/ssh-agent@v0.2.0\n        with:\n        ssh-private-key: "+e._s(e.deployment_key)+"\n\n    - name: Deploy to Github Pages 🚀\n        uses: JamesIves/github-pages-deploy-action@releases/v3\n        with:\n        SSH: true\n        BRANCH: gh-pages # The branch the action should deploy to.\n        FOLDER: dist # The folder the action should deploy.")]),e._v(" "),e._m(4),e._v(" "),n("pre",[e._v("- name: Install SSH Client 🔑\n        uses: webfactory/ssh-agent@v0.2.0\n        with:\n        ssh-private-key: "+e._s(e.deployment_key)+"\n")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("pre",[e._v("- name: Deploy to Github Pages 🚀\n    uses: JamesIves/github-pages-deploy-action@releases/v3\n    with:\n        SSH: true\n        BRANCH: gh-pages # The branch the action should deploy to.\n        FOLDER: dist # The folder the action should deploy.\n")]),e._v(" "),e._m(7)]),e._v(" "),e._m(8),e._v(" "),n("img",{staticStyle:{border:"1px solid #ccc"},attrs:{src:s("FvBs"),alt:"Github all workflows"}}),e._v(" "),n("p",[e._v("If everything setup properyly, you will see like this.")]),e._v(" "),n("img",{staticStyle:{border:"1px solid #ccc"},attrs:{src:s("ccu5"),alt:"Github success deployment"}}),e._v(" "),n("hr")])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"introduction"},[n("h2",[e._v("Deploying Github page with Github Action and Workflows")]),e._v(" "),n("p",[e._v("In this post I am going to explain and share how to deploy Github Page using Github Action and Workflows.")]),e._v(" "),n("p",[e._v("This Workflow will deploy a static page to Github Page whenever you push to "),n("code",[e._v("master")]),e._v(" branch or the "),n("code",[e._v("branch")]),e._v(" you choose to use.")]),e._v(" "),n("hr"),e._v(" "),n("p",[n("strong",[e._v("NOTE:")]),e._v(" Github page only deploys static page. If you need to deploy dynamic pages, Github page is not for you.")]),e._v(" "),n("hr"),e._v(" "),n("p",[n("strong",[e._v("This assume you have already:")])]),e._v(" "),n("ul",[n("li",[e._v("\n                    created "),n("code",[e._v("SSH key")]),e._v(".\n                    If you haven't created yet, you can follow this \n                    "),n("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_blank"}},[e._v("guide.")])]),e._v(" "),n("li",[e._v("\n                    setup "),n("code",[e._v("SSH key")]),e._v("\n                    to your Github account. If you haven't done yet, you can follow this \n                    "),n("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account",target:"_blank"}},[e._v("guide.")])]),e._v(" "),n("li",[e._v("\n                    setup "),n("code",[e._v("gh-pages")]),e._v(" branch as deployment branch. \n\n                    If you haven't done yet, you can go to your repository. Click "),n("strong",[e._v("Settings")]),e._v(" tab \n                    and scroll down to "),n("strong",[e._v("Github Pages")]),e._v(" section.\n                    "),n("img",{staticStyle:{border:"1px solid #ccc"},attrs:{src:s("dhHV"),alt:"Github pages deployment branch"}})]),e._v(" "),n("li",[e._v("\n                    setup repository's "),n("code",[e._v("DEPLOY_KEY")]),e._v(" secret.\n\n                    To do this, go to your repository. Click "),n("strong",[e._v("Settings")]),e._v(" and click "),n("strong",[e._v("Secrets")]),e._v(".\n                    Click "),n("strong",[e._v("Ad new secret")]),e._v(".\n                    Name your key as "),n("code",[e._v("DEPLOY_KEY")]),e._v(" and paste in your "),n("code",[e._v("private key")]),e._v(".\n                    "),n("img",{attrs:{src:s("N//e"),alt:"Github settings secrets"}})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n                For this post, I'm going to use my own website which is hosted to Github Page.\n                My "),t("a",{attrs:{href:"https://edionmelarosa.github.io/personal-site/#/",target:"_blank"}},[this._v("website")]),this._v(" | "),t("a",{attrs:{href:"https://github.com/edionmelarosa/personal-site"}},[this._v("Github repository")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Workflows are stored in "),t("code",[this._v(".github/workflows/")]),this._v(" folder.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now, create a file inside "),t("code",[this._v(".github/workflows/")]),this._v(" called "),t("code",[this._v("main.yml")]),this._v(" and paste content below.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Install SSH Client")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("secrets.DEPLOY_KEY")]),this._v(" is the one that we setup above.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Deploy to Github Pages")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("BRANCH")]),e._v(" - The deployment branch you setup for your Github pages.\n                ")]),e._v(" "),s("li",[s("code",[e._v("FOLDER")]),e._v(" - The folder you want to to get deployed. "),s("br"),e._v("\n                    Usually, it's "),s("code",[e._v("dist")]),e._v(" for VueJs App. and "),s("code",[e._v("build")]),e._v(" for ReactJs App.\n                ")]),e._v(" "),s("li",[s("code",[e._v("SSH")]),e._v(" - leave to "),s("code",[e._v("true")]),e._v(". This is required for deployment using an "),s("code",[e._v("SSH")]),e._v(".\n                ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All Done! Try to push now using "),t("code",[this._v("master")]),this._v(" branch and see in Actions.")])}]};var o=s("VU/8")({name:"DeployingYourGithubPageUsingGithubActionWorkFlow",data:function(){return{deployment_key:"${{ secrets.DEPLOY_KEY }}"}}},n,!1,function(e){s("XOOE")},"data-v-baea883e",null);t.default=o.exports}});
//# sourceMappingURL=1.70f3ca1bd4f03e270987.js.map