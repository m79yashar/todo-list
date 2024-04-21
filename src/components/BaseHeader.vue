<template>
    <div class="header">
        <h1 id="logo">Todo List</h1>
        <div class="router">
            <router-link to="/add-task">add Task</router-link>
            <router-link to="/tasks">Tasks</router-link>
        </div>
    </div>
</template>

<style scoped>
.header{
    color: #172A3A;
    height: 100px;
    background-color: #51E5FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#logo{
    margin-left: 20px;
    font-size: 40px;
}
.router{
    width: 250px;
    margin-right: 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

}
a{
    width: 100px;
    height: 40px;
    border: #172A3A 2px solid;
    color: #172A3A;
    text-decoration: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
a:active,
a:hover,
a.router-link-active{
    border: #172A3A 2px solid;
    background-color: #172A3A;
    color: #51E5FF;
}
@media screen and (max-width: 412px) {
    #logo{
        font-size: 30px;
    }
    a{
        width: 80px;
        height: 30px;
    }
    .router{
        width: 180px;
        margin-right: 10px;
    }
    .header{
        height: 80px;
    }
}
</style>