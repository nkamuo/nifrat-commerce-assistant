<template>
    <div>
        <q-table
  :data="data"
  :columns="columns"
  :filter="filter"
  :title="title"
  row-key="name"
>
  <q-tr slot="body" slot-scope="props" :props="props">
    <q-td key="desc" :props="props">
      {{ props.row.name }}
      <q-popup-edit v-model="props.row.name">
        <q-field count>
          <q-input v-model="props.row.name" />
        </q-field>
      </q-popup-edit>
    </q-td>
    <q-td key="calories" :props="props">
      {{ props.row.calories }}
      <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
        <q-input type="number" v-model="props.row.calories" />
      </q-popup-edit>
    </q-td>
    <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
    <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
    <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
    <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
    <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
    <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
  </q-tr>
</q-table>
    </div>
</template>