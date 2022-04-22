<template>
    <Fragment>
        <li>
            <router-link class="hover:text-seconday/75 dark:hover:text-primary/75" to="/#majors">
                Available
                Majors
            </router-link>
        </li>
        <li>
            <router-link to="/faq" class="hover:text-seconday/75 dark:hover:text-primary/75">
                FAQ
            </router-link>
        </li>
    </Fragment>
</template>
<script>
import { Fragment } from 'vue-fragment'
export default {
    components: { Fragment }
}

</script>

