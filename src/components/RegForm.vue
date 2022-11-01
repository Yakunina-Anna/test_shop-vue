<template>
  <form class="form registration__form" action="#">
                     <div class="form__inner registration__inner--wide">
                        <p class="form__text">Your Name</p>
                        <!-- <reg-input v-model="firstName"/> -->
                        <reg-input v-model="firstName" :placeholder="firstName"/>
                        <reg-input v-model="lastName" :placeholder="lastName"/>
                        <!-- <input class="form__field" type="text" placeholder="First Name" required>
                        <input class="form__field" type="text" placeholder="Last Name" required> -->
                        <div class="form__fields">
                           <label><input class="form__select" type="radio" name="gender" required>Male</label>
                           <label><input class="form__select" type="radio" name="gender" required>Female</label>
                        </div>
                        <p class="form__text">Login details</p>
                        <input class="form__field" placeholder="Email" type="email" required>
                        <input class="form__field" placeholder="Password" type="password" required>
                        <p class="form__desc">Please use 8 or more characters, with at least 1 number and a mixture of
                           uppercase and
                           lowercase letters</p>
                        <main-btn>Зарегистрироваться</main-btn>
                     </div>
                  </form>
</template>

<script>
import RegInput from './UIComp/RegInput.vue'
export default {
  components: { RegInput },
  data(){
    return{

        firstName:'First Name',
        lastName:'Last Name'
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/style/var';
 @import '@/style/mixin';
.registration{
 &__form {
      margin-right: 22px;
 }
 &__inner {
      &--wide {
         @include media("max", "md") {
            margin-bottom: 0;
         }
         @include media("max", "xs") {
            max-width: 100%;
         }
      }
   }
}
.form {
   width: 100%;
   max-width: 360px;
   @include media("max", "md") {
      width: 100%;
      max-width: 100%;
      display: flex;
      justify-content: space-evenly;
      @include media("max", "sm") {
         justify-content: space-between;
      }
      @include media("max", "xs") {
         display: block;
         margin: 0 auto;
      }
   }
   &__inner {
      display: flex;
      flex-direction: column;
      margin-top: 17px;
      @include media("max", "md") {
         margin-top: 0;
         width: 100%;
         max-width: 360px;
         margin-bottom: 128px;
      }
      @include media("max", "sm") {
         margin-right: 15px;
      }
      @include media("max", "xs") {
         margin-right: 0;
         margin: auto;
      }
   }
   &__text {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #222222;
      margin-bottom: 20px;
   }

   &__field {
      min-height: 45px;
      margin-bottom: 20px;
      padding-left: 17px;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      color: #b1b1b1;
      border: 0;
      outline: 1px solid #a4a4a4;
      &:focus {
         opacity: 0.5;
      }
   }
   &__btn {
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      color: #4a4a4a;
      padding: 12px 0px;
      text-align: center;
      outline: 1px solid rgba(164, 164, 164, 1);
      width: 100px;
      background-color: $body;
      border: 0;
   }

   &__desc {
      color: #b1b1b1;
      font-size: 13px;
   }

   &__select {
      width: 17px;
      height: 17px;
      margin-right: 10px;
      vertical-align: text-top;
   }

   label {
      margin-right: 20px;
   }

   &__fields {
      margin-top: 13px;
      margin-bottom: 30px;
   }
}

.sub-content {
   @include media("max", "md") {
      width: 100%;
      max-width: 360px;
      @include media("max", "xs") {
         width: 100%;
         max-width: 360px;
         margin: 0 auto;
      }
   }
   &__inner {
      min-height: 214px;
      background-color: #f5f3f3;
      padding: 39px 30px;
      margin-top: 73px;
      position: relative;
      @include media("max", "md") {
         margin-top: 39px;
      }
      @include media("max", "xs") {
         margin-bottom: 96px;
      }
   }
   &__sub {
      text-align: right;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: #4a4a4a;
      margin-bottom: 12px;
      &--size-m {
         font-weight: 300;
         font-size: 16px;
         line-height: 19px;
         color: #222222;
      }
   }

   &__total {
      margin-left: 30px;
      &--red {
         color: $desc;
         font-weight: 700;
      }
   }

   &__btn {
      border: 0;
      margin: 0 auto;
      display: block;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      background-color: $desc;
      padding: 16px 37px;
      margin-top: 17px;
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
         background-color: #ffffff;
         color: #f16d7f;
         outline: 1px solid #f16d7f;
      }
   }

   &__line {
      border-bottom: 1px solid #e2e2e2;
      max-width: 275px;
      margin: 0 auto;
      margin-top: 21px;
   }
}


    
</style>