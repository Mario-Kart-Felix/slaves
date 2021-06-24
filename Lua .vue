
<template>
  <div v-highlight>

    <div style="float:right">
      <span :class="isLanguageHL('cpp')" @click="onLanguage('cpp')">Cpp</span>
      <span style="color: #ddd; padding: 0em .5em;">|</span>
      <span :class="isLanguageHL('js')" @click="onLanguage('js')">Javascript</span>
      <span style="color: #ddd; padding: 0em .5em;">|</span>
      <span :class="isLanguageHL('lua')" @click="onLanguage('lua')">Lua</span>
    </div>
    <div>&nbsp;</div>

    <pre v-show="canShow('cpp')" class="language-cpp">
        <code class="language-cpp">{{ this.cppText }}</code>
    </pre>
    <pre v-show="canShow('js')" class="language-js">
        <code class="language-js">{{ this.jsText }}</code>
    </pre>
    <pre v-show="canShow('lua')" class="language-lua">
        <code class="language-lua">{{ this.luaText }}</code>
    </pre>

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    desc: String,
    cpp: String,
    js: String,
    lua: String
  },
  data() {
    const d = {
      "lang": "cpp",
      "cppText": this.cpp,
      "jsText": this.js,
      "luaText": this.lua,
    }

    if ("" != this.desc) {
      let comment = this.desc;
      if (!comment.startsWith("/")) {
        comment = "// " + comment
      }
      d.cppText = comment + "\n\n" + this.cpp;
      d.jsText = comment + "\n\n" + this.js;
      d.luaText = comment + "\n\n" + this.lua;
    }

    return d
  },

  methods: {
    onLanguage(l) {
      console.log(this.desc);
      Vue.set(Vue.prototype, 'apiLang', l);
    },
    isLanguageHL(l) {
      const lang = Vue.prototype.apiLang;
      if (lang == l) {
        return "showapi-lang-tag-hl";
      }

      return "showapi-lang-tag";
    },
    canShow(l) {
      if (Vue.prototype.apiLang == l) {
        return true;
      }

      return false;
    }
  },
  watch: {
    apiLang () {
    }
  }
};
</script>

<style scoped>
.showapi-container {
  background: black;
  border-radius: 5px;
  padding: 10px 20px;
}

.showapi-desc {
  color: gray;
  margin-bottom: 20px;
}

.showapi-cpp {
  color: rgb(210, 210, 210);
  margin-bottom: 10px;
}

.showapi-js {
  color: rgb(210, 210, 210);
  margin-bottom: 10px;
}

.showapi-lua {
  color: rgb(210, 210, 210);
  margin-bottom: 10px;
}

.showapi-lang-tag {
  color: black;
}

.showapi-lang-tag-hl {
  color: black; font-weight:bold
}

.showapi-tag {

}

</style>
