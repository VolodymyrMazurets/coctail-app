<template>
  <div>
    <el-card :body-style="{ padding: '0px', cursor: 'pointer' }" shadow="hover">
      <img :src="data.strDrinkThumb" class="filter__img" />
      <div style="padding: 14px;" class="filter__row">
        <h2>{{ data.strDrink }}</h2>
        <el-tag
          :type="data.strAlcoholic === 'Alcoholic' ? 'success' : 'danger'"
          >{{ data.strAlcoholic }}</el-tag
        >
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'CoctailCard',
  props: {
    data: {
      required: true,
      type: Object
    }
  }
}
</script>
