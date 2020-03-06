export class SidebarComponent {
  constructor() {
    this.$sidebar = $("#sidebar");
    this.$sidebarToggle = $("#sidebar__toggle");
    this.$main = $(".index-page__main");
  }

  addToggleEvent() {
    this.$sidebarToggle.click(() => {
      if (this.$sidebar.hasClass("sidebar--close")) {
        this.$sidebar.removeClass("sidebar--close");
        this.$main.removeClass("sidebar--close");
      } else {
        this.$sidebar.addClass("sidebar--close");
        this.$main.addClass("sidebar--close");
      }
    });
  }

  openSidebar() {}
}
