<template>
  <nav class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#">SideBar</a>
      </div>
      <div class="sidebar-menu">
        <ul>          
            <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-tachometer-alt"></i>
              <span>Dashboard</span>              
            </a>
             <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">Dashboard 1
                    <span class="badge badge-pill badge-success">Pro</span>
                  </a>
                </li>
                <li>
                  <a href="#">Dashboard 2</a>
                </li>
                <li>
                  <a href="#">Dashboard 3</a>
                </li>
              </ul>
            </div>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SamplePanel",
  data() {
    return {};
  },
  methods: {
    OnEnter(e) {
      console.log(e);
    },
    toggleSideBar() {
      this.$refs.sideBar.toggle();
    },
  },
};

</script>

<style scoped>

@import 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';

.sidebar {
  width: 260px;
  height: 100%;
  background-color: #f5f5f5;
}
.sidebar-brand {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar a {
  text-decoration: none;
}

.sidebar-content {
  max-height: calc(100% - 30px);
  height: calc(100% - 30px);
  overflow-y: auto;
  position: relative;
}

.sidebar .sidebar-brand {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.sidebar .sidebar-brand > a {
  text-transform: uppercase;
  font-weight: bold;
  flex-grow: 1;
}

.sidebar .sidebar-menu {
  padding-bottom: 10px;
}

.sidebar .sidebar-menu .header-menu span {
  font-weight: bold;
  font-size: 14px;
  padding: 15px 20px 5px 20px;
  display: inline-block;
}

.sidebar .sidebar-menu ul li a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  position: relative;
  padding: 8px 30px 8px 20px;
}

.sidebar .sidebar-menu ul li a i {
  margin-right: 10px;
  font-size: 12px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
}

.sidebar .sidebar-menu ul li a:hover > i::before {
  display: inline-block;
  animation: swing ease-in-out 0.5s 1 alternate;
}

.sidebar .sidebar-menu .sidebar-dropdown > a:after {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f105";
  font-style: normal;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: 0 0;
  position: absolute;
  right: 15px;
  top: 14px;
}

.sidebar .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {
  padding: 5px 0;
}

.sidebar .sidebar-menu .sidebar-dropdown .sidebar-submenu li {
  padding-left: 25px;
  font-size: 13px;
}

.sidebar .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {
  content: "\f111";
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  font-style: normal;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
  font-size: 8px;
}

.sidebar .sidebar-menu ul li a span.label,
.sidebar .sidebar-menu ul li a span.badge {
  float: right;
  margin-top: 8px;
  margin-left: 5px;
}

.sidebar .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,
.sidebar .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {
  float: right;
  margin-top: 0px;
}

.sidebar .sidebar-menu .sidebar-submenu {
  display: none;
}

.sidebar .sidebar-menu .sidebar-dropdown.active > a:after {
  transform: rotate(90deg);
  right: 17px;
}
</style>