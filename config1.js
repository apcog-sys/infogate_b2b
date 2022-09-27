// Tab list
var tab_content = {
  Super_Admin: {
    tab_list: [
      { Name: "Entity", function: "get_entity_list()" },
      { Name: "Room", function: "get_room_list()" },
      { Name: "Inbox", function: "get_inbox_list()" },
      { Name: "Message_Queue", function: "get_msgq_list()" },
      { Name: "Archive", function: "get_archive_list()" },
      { Name: "Users", function: "get_user_list()" },
    ],
  },
  Entity_Admin: {
    tab_list: [
      { Name: "Room", function: "get_room_list()" },
      { Name: "Inbox", function: "get_inbox_list()" },
      { Name: "Message_Queue", function: "get_msgq_list()" },
      { Name: "Archive", function: "get_archive_list()" },
    ],
  },
  App: {
    tab_list: [
      { Name: "Inbox", function: "get_inbox_list()" },
      { Name: "Message_Queue", function: "get_msgq_list()" },
    ],
  },
};
// entity json config
var entity_list = {
  event: "entity_list",
  target: "entity",
  handler: "entity_list",
  query_str: "",
  controls: [
    {
      type: "button",
      name: "new",
      function: "create_modal(1)",
      class: "glyphicon glyphicon-pencil",
    },
    {
      type: "button",
      name: "first",
      function: "first_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "prev",
      function: "previous_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "next",
      function: "next_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "last",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "print",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
  ],
  page_attributes: {
    permissions_set1: {
      get: "id, entity_name, entity_key, entity_url, room_ids, admin, activation_code, status, createdAt, updatedAt",
      show: [
        "id",
        "entity_name",
        "entity_key",
        "entity_url",
        "status",
        "room_ids",
        "admin",
        "activation_code",
        "status",
      ],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["Admin"],
    },
    permissions_set2: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: false,
      view: true,
      edit: false,
      open: true,
      enable: false,
      print: true,
      roles: ["User"],
    },
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
  },
};
var get_entity_details = {
  event: "get_entity_details",
  target: "admin",
  handler: "function name",
  query_str: "",
  ref_query_str1: "",
  ref_query_str2: "",
  fields: [
    {
      id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      entity_name: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      entity_key: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      entity_url: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      room_ids: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      admin: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      activation_code: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: true,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      status: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: true,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
  ],
  page_attributes: {
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
    permissions_set1: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
    permissions_set2: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
  },
};
// room json config
var room_list = {
  event: "room_list",
  target: "room",
  handler: "room_list",
  query_str: "",
  controls: [
    {
      type: "button",
      name: "new",
      function: "create_modal(1)",
      class: "glyphicon glyphicon-pencil",
    },
    {
      type: "button",
      name: "first",
      function: "first_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "prev",
      function: "previous_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "next",
      function: "next_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "last",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "print",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
  ],
  page_attributes: {
    permissions_set1: {
      get: "id, room_name, message_types, member_details, q_limit, q_occupancy, timeout, retries",
      show: [
        "id",
        "room_name",
        "message_types",
        "member_details",
        "q_limit",
        "q_occupancy",
        "timeout",
        "retries",
      ],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["Admin"],
    },
    permissions_set2: {
      get: "id, room_name, message_types, member_details, q_limit, q_occupancy, timeout, retries",
      show: [
        "id",
        "room_name",
        "message_types",
        "member_details",
        "q_limit",
        "q_occupancy",
        "timeout",
        "retries",
      ],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["User"],
    },
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
  },
};
var get_room_details = {
  event: "get_room_details",
  target: "admin",
  handler: "function name",
  query_str: "",
  ref_query_str1: "",
  ref_query_str2: "",
  fields: [
    {
      id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      room_name: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      message_types: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      publisher_ids: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      subscriber_ids: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      q_limit: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      q_occupancy: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      timeout: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      retries: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: true,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
  ],
  page_attributes: {
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
    permissions_set1: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
    permissions_set2: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
  },
};
// inbox json config
var inbox_list = {
  event: "inbox_list",
  target: "inbox",
  handler: "inbox",
  query_str: "",
  controls: [
    {
      type: "button",
      name: "new",
      function: "create_modal(1)",
      class: "glyphicon glyphicon-pencil",
    },
    {
      type: "button",
      name: "first",
      function: "first_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "prev",
      function: "previous_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "next",
      function: "next_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "last",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "print",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
  ],
  page_attributes: {
    permissions_set1: {
      get: "id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, retries, status",
      show: [
        "id",
        "target_entity",
        "room_id",
        "in_stamp",
        "out_stamp",
        "delivery_stamp",
        "msg_id",
        "retries",
        "status",
      ],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["Admin"],
    },
    permissions_set2: {
      get: "id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, retries, status",
      show: [
        "id",
        "target_entity",
        "room_id",
        "in_stamp",
        "out_stamp",
        "delivery_stamp",
        "msg_id",
        "retries",
        "status",
      ],
      create: false,
      view: true,
      edit: false,
      open: true,
      enable: false,
      print: true,
      roles: ["User"],
    },
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
  },
};
var get_inbox_details = {
  event: "get_entity_details",
  target: "admin",
  handler: "function name",
  query_str: "",
  ref_query_str1: "",
  ref_query_str2: "",
  fields: [
    {
      id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      target_entity: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      room_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      in_stamp: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      out_stamp: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      delivery_stamp: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      msg_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      retries: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: true,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      status: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: true,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
  ],
  page_attributes: {
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
    permissions_set1: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
    permissions_set2: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
  },
};
// msgq json config
var msgq_list = {
  event: "msgq_list",
  target: "msgq",
  handler: "msgq",
  query_str: "",
  controls: [
    {
      type: "button",
      name: "new",
      function: "create_modal(1)",
      class: "glyphicon glyphicon-pencil",
    },
    {
      type: "button",
      name: "first",
      function: "first_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "prev",
      function: "previous_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "next",
      function: "next_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "last",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "print",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
  ],
  page_attributes: {
    permissions_set1: {
      get: "id, msg_body, createdAt, updatedAt",
      show: ["id", "msg_body"],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["Admin"],
    },
    permissions_set2: {
      get: "id, msg_id, msg_body, createdAt, updatedAt",
      show: ["id", "msg_id", "msg_body", "createdAt", "updatedAt"],
      create: false,
      view: true,
      edit: false,
      open: true,
      enable: false,
      print: true,
      roles: ["User"],
    },
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
  },
};
var get_msgq_details = {
  event: "get_msgq_details",
  target: "admin",
  handler: "function name",
  query_str: "",
  ref_query_str1: "",
  ref_query_str2: "",
  fields: [
    {
      id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      msg_body: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
  ],
  page_attributes: {
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
    permissions_set1: {
      get: "id, msg_body, createdAt, updatedAt",
      show: ["id", "msg_body"],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
    permissions_set2: {
      get: "id, msg_body, createdAt, updatedAt",
      show: ["id", "msg_body"],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
  },
};
// archive json config
var archive_list = {
  event: "archive_list",
  target: "archive",
  handler: "archive",
  query_str: "",
  controls: [
    {
      type: "button",
      name: "first",
      function: "first_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "prev",
      function: "previous_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "next",
      function: "next_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "last",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "print",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
  ],
  page_attributes: {
    permissions_set1: {
      get: "id, inbox_id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, status",
      show: [
        "id",
        "inbox_id",
        "target_entity",
        "room_id",
        "in_stamp",
        "out_stamp",
        "delivery_stamp",
        "msg_id",
        "status",
      ],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["Admin"],
    },
    permissions_set2: {
      get: "id, inbox_id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, status",
      show: [
        "id",
        "inbox_id",
        "target_entity",
        "room_id",
        "in_stamp",
        "out_stamp",
        "delivery_stamp",
        "msg_id",
        "status",
      ],
      create: false,
      view: true,
      edit: false,
      open: true,
      enable: false,
      print: true,
      roles: ["User"],
    },
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
  },
};
var get_archive_details = {
  event: "get_archive_details",
  target: "admin",
  handler: "function name",
  query_str: "",
  ref_query_str1: "",
  ref_query_str2: "",
  fields: [
    {
      id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      inbox_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      target_entity: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      room_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      in_stamp: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      out_stamp: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      delivery_stamp: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      msg_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      status: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
  ],
  page_attributes: {
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
    permissions_set1: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
    permissions_set2: {
      get: "id,entity_name,admin_key,inbox_url,status,room_ids,admin_uid,admin_pwd,admin_email,admin_phone,createdAt,updatedAt",
      show: [
        "id",
        "entity_name",
        "admin_key",
        "inbox_url",
        "status",
        "room_ids",
        "admin_uid",
        "admin_pwd",
        "admin_email",
        "admin_phone",
        "createdAt",
        "updatedAt",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
  },
};
// user json config
var user_list = {
  event: "user_list",
  target: "user",
  handler: "user_list",
  query_str: "",
  controls: [
    {
      type: "button",
      name: "new",
      function: "create_modal(1)",
      class: "glyphicon glyphicon-pencil",
    },
    {
      type: "button",
      name: "first",
      function: "first_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "prev",
      function: "previous_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "next",
      function: "next_page()",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "last",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
    {
      type: "button",
      name: "print",
      function: "",
      class: "btn btn-primary btn-xs my-xs-btn",
    },
  ],
  page_attributes: {
    permissions_set1: {
      get: "id, name_of_user, phone_no, email_uid, password, entity_id, role_id",
      show: [
        "id",
        "name_of_user",
        "phone_no",
        "email_uid",
        "password",
        "entity_id",
        "role_id",
      ],
      create: true,
      view: true,
      edit: true,
      open: true,
      enable: true,
      print: true,
      roles: ["Admin"],
    },
    permissions_set2: {
      get: "id, name_of_user, phone_no, email_uid, password, entity_id, role_id",
      show: [
        "id",
        "name_of_user",
        "phone_no",
        "email_uid",
        "password",
        "entity_id",
        "role_id",
      ],
      create: false,
      view: true,
      edit: false,
      open: true,
      enable: false,
      print: true,
      roles: ["User"],
    },
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
  },
};
var get_user_details = {
  event: "get_user_details",
  target: "admin",
  handler: "function name",
  query_str: "",
  ref_query_str1: "",
  ref_query_str2: "",
  fields: [
    {
      id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      name_of_user: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      phone_no: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      email_uid: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      password: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      entity_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
    {
      role_id: {
        datatype: "text",
        mandatory: true,
        show: true,
        edit: true,
        create: false,
        "active/cancel": "",
        default: [
          {
            value: "",
            document_query: "",
          },
        ],
        inputType: ["dropdown", "speech", "handwritten", "helper_function"],
        sym_validation: "",
        stm_validation: "",
      },
    },
  ],
  page_attributes: {
    href: {
      host: "localhost",
      login_name: "root",
      password: "root",
    },
    permissions_set1: {
      get: "id, name_of_user, phone_no, email_uid, password, entity_id, role_id",
      show: [
        "id",
        "name_of_user",
        "phone_no",
        "email_uid",
        "password",
        "entity_id",
        "role_id",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
    permissions_set2: {
      get: "id, name_of_user, phone_no, email_uid, password, entity_id, role_id",
      show: [
        "id",
        "name_of_user",
        "phone_no",
        "email_uid",
        "password",
        "entity_id",
        "role_id",
      ],
      create: true,
      view: true,
      edit: true,
      open: false,
      enable: true,
      print: true,
      roles: ["Admin", "user"],
    },
  },
};