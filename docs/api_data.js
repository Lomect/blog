define({ "api": [  {    "type": "post",    "url": "/account",    "title": "邮箱，密码修改",    "version": "0.0.1",    "name": "Change_auth",    "description": "<p>更改邮箱，密码</p>",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "email",            "description": "<p>邮箱</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 49\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\": \"Success\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1000,\n    \"message\": \"系统错误\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1002,\n    \"message\": \"请求参数有误\",\n    \"result\": {\n        \"email\": [\n            \"Missing data for required field.\"\n        ]\n    }\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\nConnection: keep-alive\nContent-Length: 68\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1001,\n    \"message\": \"账号或密码错误\"\n}",          "type": "json"        }      ]    },    "filename": "app/auth/view.py",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/confirm/<token>",    "title": "用户验证",    "version": "0.0.1",    "name": "Confirm_get",    "description": "<p>账户邮箱激活</p>",    "group": "Auth",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 49\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\":{\n        \"token\":\"pwVbZvAAdi8yEaWextkG\"\n        }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1002,\n    \"message\": \"请求参数有误\"\n}",          "type": "json"        }      ]    },    "filename": "app/auth/view.py",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/follow/<pk:int>",    "title": "关注用户",    "version": "0.0.1",    "name": "Follow",    "description": "<p>关注某个用户</p>",    "group": "Auth",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 49\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\": \"Success\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1000,\n    \"message\": \"系统错误\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\nConnection: keep-alive\nContent-Length: 68\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1001,\n    \"message\": \"账号或密码错误\"\n}",          "type": "json"        }      ]    },    "filename": "app/auth/view.py",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/login",    "title": "登录",    "version": "0.0.1",    "name": "Login_post",    "description": "<p>登录</p>",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "email",            "description": "<p>邮箱</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 72\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\": {\n        \"token\": \"YEmBbhuVQHojIk3cxeWa\"\n    }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1002,\n    \"message\": \"请求参数有误\"\n}",          "type": "json"        }      ]    },    "filename": "app/auth/view.py",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/register",    "title": "注册",    "version": "0.0.1",    "name": "Register",    "description": "<p>注册</p>",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "username",            "description": "<p>用户名</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "email",            "description": "<p>注册邮箱（以后登录使用，单个邮箱只能注册一个帐号）</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 49\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\": \"Success\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1002,\n    \"message\": \"请求参数有误\"\n}",          "type": "json"        }      ]    },    "filename": "app/auth/view.py",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/blogs",    "title": "博客查询",    "version": "0.0.1",    "name": "Blogs_get",    "description": "<p>查询博客</p>",    "group": "Blog",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "sort",            "defaultValue": "create_time",            "description": "<p>排序条件</p>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": true,            "field": "page",            "defaultValue": "1",            "description": "<p>页码</p>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": true,            "field": "count",            "defaultValue": "10",            "description": "<p>每页数量</p>"          },          {            "group": "Parameter",            "type": "Integer",            "allowedValues": [              "0",              "1"            ],            "optional": true,            "field": "desc",            "defaultValue": "0",            "description": "<p>是否倒序排列</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 253\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\": [\n        {\n            \"author\": {\n                \"email\": \"1209518758@qq.com\",\n                \"id\": 1,\n                \"username\": \"yjgao\"\n            },\n            \"content\": \"firstjob\",\n            \"title\": \"lalalla\"\n        },\n        {\n            \"author\": {\n                \"email\": \"1209518758@qq.com\",\n                \"id\": 1,\n                \"username\": \"yjgao\"\n            },\n            \"content\": \"firstjob\",\n            \"title\": \"lalalla\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1000,\n    \"message\": \"系统错误\"\n}",          "type": "json"        }      ]    },    "filename": "app/blogs/view.py",    "groupTitle": "Blog"  },  {    "type": "post",    "url": "/blog",    "title": "博客发布",    "version": "0.0.1",    "name": "blog_create",    "description": "<p>发布博客</p>",    "group": "Blog",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "title",            "description": "<p>blog标题</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "content",            "description": "<p>blog内容</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 49\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 0,\n    \"message\": \"success\",\n    \"result\": {\n        \"content\": \"firstjob\",\n        \"title\": \"lalalla\"\n    }\n\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 62\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1000,\n    \"message\": \"系统错误\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized\nConnection: keep-alive\nContent-Length: 68\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1001,\n    \"message\": \"账号或密码错误\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\nConnection: keep-alive\nContent-Length: 120\nContent-Type: application/json\nKeep-Alive: 60\n\n{\n    \"code\": 1002,\n    \"message\": \"请求参数有误\",\n    \"result\": {\n        \"content\": [\n            \"Missing data for required field.\"\n        ]\n    }\n}",          "type": "json"        }      ]    },    "filename": "app/blogs/view.py",    "groupTitle": "Blog"  }] });
