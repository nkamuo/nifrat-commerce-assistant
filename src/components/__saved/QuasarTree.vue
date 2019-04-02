<template>
  <div>
    <div class="q-mb-sm row no-wrap items-center">
      <q-select
        v-model="tickStrategy"
        color="secondary"
        stack-label="Tick Strategy"
        :options="[
          {label: 'None', value: 'none'},
          {label: 'Leaf', value: 'leaf'},
          {label: 'Leaf Filtered', value: 'leaf-filtered'},
          {label: 'Strict', value: 'strict'}
        ]"
        class="q-ma-none q-mr-sm"
        style="width: 150px"
      />
      <q-input
        v-if="tickStrategy === 'leaf-filtered'"
        color="secondary"
        stack-label="Filter"
        v-model="tickFilter"
        class="q-ma-none"
        clearable
      />
    </div>
    <q-tree
      :nodes="tickable"
      color="secondary"
      default-expand-all
      :ticked.sync="ticked"
      :tick-strategy="tickStrategy"
      :filter="tickFilter"
      node-key="label"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    ticked: [],
    tickStrategy: 'leaf',
    tickFilter: null,
    tickable: [
      {
        label: 'Satisfied customers',
        avatar: 'statics/boy-avatar.png',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service',
            icon: 'room_service',
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere (not tickable)',
                tickable: false,
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation (disabled node)',
                disabled: true,
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          },
          {
            label: 'Extra information (has no tick)',
            noTick: true,
            icon: 'photo'
          },
          {
            label: 'Forced tick strategy (to "strict" in this case)',
            tickStrategy: 'strict',
            icon: 'school',
            children: [
              {
                label: 'Happy atmosphere',
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation',
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Very pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          }
        ]
      }
    ]
  })
}
</script>

Lazy loading nodes

<template>
  <q-tree
    :nodes="lazy"
    default-expand-all
    node-key="label"
    @lazy-load="onLazyLoad"
  />
</template>

<script>
export default {
  data: () => ({
    lazy: [
      {
        label: 'Node 1',
        children: [
          { label: 'Node 1.1', lazy: true },
          { label: 'Node 1.2', lazy: true }
        ]
      },
      {
        label: 'Node 2',
        lazy: true
      },
      {
        label: 'Lazy load empty',
        lazy: true
      },
      {
        label: 'Node is not expandable',
        expandable: false,
        children: [
          { label: 'Some node' }
        ]
      }
    ]
  }),
  methods: {
    onLazyLoad ({ node, key, done, fail }) {
      // call fail() if any error occurs

      setTimeout(() => {
        // simulate loading and setting an empty node
        if (key.indexOf('Lazy load empty') > -1) {
          done([])
          return
        }

        const label = node.label
        done([
          { label: `${label}.1` },
          { label: `${label}.2`, lazy: true },
          {
            label: `${label}.3`,
            children: [
              { label: `${label}.3.1`, lazy: true },
              { label: `${label}.3.2`, lazy: true }
            ]
          }
        ])
      }, 1000)
    }
  }
}
</script>