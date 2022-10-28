<template>
    <div class="nav-page">
        <div class="nav ">
            <p>nav</p>
        </div>
        <div class="nav-shaow"></div>
        <div class="list">
            <div class="nav-mask"></div>
            <div class="list-item " v-for="i in 30" :key="i">
                <div></div>
            </div>
        </div>
    </div>
</template> 

<style scoped>
.nav-page {
    width: 100%;
    height: 320px;
    background-color: white;
    margin-top: 48px;
    overflow: auto;
    position: relative;
}

.nav-page .nav {
    width: 100%;
    height: 48px;
    background-color: #03a9f4;
    position: sticky;
    top: 0px;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;

    z-index: 2;
}

.nav-page .nav-shaow {
    width: 100%;
    height: 8px;
    position: sticky;
    top: 48px;
    left: 0;
    background-image: linear-gradient(to bottom, #AAA, transparent);
    z-index: 1;

}

.list {
    width: 100%;
    position: relative;
}

.list .nav-mask {
    width: 100%;
    height: 8px;
    background-color: white;
    position: absolute;
    top: -8px;
    left: 0;
    z-index: 1;
}

.list .list-item {
    width: 100%;
    height: 56px;
    margin-bottom: 8px;
    padding: 8px 2px;
}

.list .list-item div {
    background-color: #eee;
    width: 100%;
    height: 100%;
    border-radius: 8px;

}
</style>