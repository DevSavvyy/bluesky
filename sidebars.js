/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    ['Getting Started']: ['requirements', 'setup'],
    ['General']: ['exports', 'component'],
    ['Core Components']: ['core/proxy', 'core/database', 'core/callbacks', 'core/core', 'core/player', 'core/fetch', 'core/spawn'],
    ['Base Components']: ['base/cron', 'base/discord', 'base/logger', 'base/scaleform'],
    ['External Components']: [
      {
        type: 'category',
        label: 'Characters',
        items: [
          'external/character/character-component',
          {
            type: 'category',
            label: 'Overrides',
            items: ['external/character/overrides/character-spawn'],
          },
          {
            type: 'category',
            label: 'Extended Components',
            items: ['external/character/extensions/character-fetch'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Notifications',
        items: ['external/notifications/notifications-component'],
      },
      {
        type: 'category',
        label: 'Queue',
        items: ['external/queue/queue-component'],
      },
      {
        type: 'category',
        label: 'Markers',
        items: ['external/markers/markers-component'],
      },
      {
        type: 'category',
        label: 'Chat',
        items: ['external/chat/chat-component'],
      },
    ],
    ['Contributing']: ['contributing/info', 'contributing/styleguide', 'contributing/docs', 'contributing/coc']
  },
};
