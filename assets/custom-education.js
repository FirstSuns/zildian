class EducationComponent extends HTMLElement {
  constructor() {
    super();
    this.searhbarContainer = this.querySelector('.search-bar-container');
    this.searhbar = this.querySelector('.search-bar');
    this.searchInput = this.querySelector('#searchInput');
    this.columns = this.querySelectorAll('.multicolumn .multicolumn-list__item');
    this.column_tabs = this.querySelectorAll('.content_tabs .tab-item');
    this.toggleMenu = this.querySelector('.toggle-menu');
    this.filterContent = this.querySelector('.menu-container');
    this.filterItems = this.filterContent.querySelectorAll('li a');
    this.resetFilter = this.querySelector('.clear-filter');
    this.closeMenu = this.querySelector('.close-menu');
    this.initSearch();
    this.tabIndex();
    this.toggleFilter();
    this.filterColumns();
  }

  initSearch() {
    var $this = this;
    this.searchInput.addEventListener('keyup',function(event){
      let searchQuery = event.target.value.toLowerCase();

      for(let i=0;i< $this.columns.length;i++){
          const currentName =  $this.columns[i].querySelector('.multicolumn-card__info h3').textContent.toLowerCase();

          if(currentName.includes(searchQuery))  
          {
              $this.columns[i].style.display = 'block';
          }   
          else{
              $this.columns[i].style.display = 'none';
          }
      }
    })
  }

  tabIndex() {
    var $this = this
    $this.column_tabs.forEach(column_tab => {
      column_tab.addEventListener('click', function (e) {
        $this.column_tabs.forEach(element => {
          element.classList.remove('active');
        });
        e.preventDefault();
        e.target.classList.add('active');
        var target = e.target.dataset.tab;
        for(let i=0;i< $this.columns.length;i++){
          const currentName =  $this.columns[i].dataset.columType;

          if(currentName.includes(target))  
          {
              $this.columns[i].style.display = 'block';
          }   
          else{
              $this.columns[i].style.display = 'none';
          }
        }
      })      
    });
  }

  toggleFilter() {
    var $this = this;
    this.toggleMenu.addEventListener('click', function (e) {
      e.preventDefault();
      e.target.classList.toggle('active');
      if (e.target.classList.contains('active')) {
        $this.filterContent.classList.add('active');
        $this.searhbar.classList.add('active');
        $this.searhbarContainer.classList.add('active');
      } else {
        $this.filterContent.classList.remove('active');
        $this.searhbar.classList.remove('active');
        $this.searhbarContainer.classList.remove('active');
      }
    });
    this.closeMenu.addEventListener('click', function (e) {
      e.preventDefault();
      $this.filterContent.classList.remove('active');
      $this.toggleMenu.classList.remove('active')
      $this.searhbar.classList.remove('active');
      $this.searhbarContainer.classList.remove('active');
    })

    window.addEventListener('mouseup',function(event){
      var pol = $this.filterContent;
      if(event.target != pol && event.target.parentNode != pol && event.target != $this.toggleMenu && event.target.parentNode != $this.toggleMenu && event.target != $this.closeMenu && event.target.parentNode != $this.closeMenu){
        $this.filterContent.classList.remove('active');
        $this.toggleMenu.classList.remove('active')
        $this.searhbar.classList.remove('active');
        $this.searhbarContainer.classList.remove('active');
      }
    });  
  }

  filterColumns() {
    var $this = this;
    this.filterItems.forEach(filterItem => {
      filterItem.addEventListener('click', function (e) {
        e.preventDefault();
        var filterLIst = [];
        var count = 0;
        
        if (e.target.dataset.filter == 'all') {
          $this.resetFilter.classList.remove('active');
          $this.columns.forEach(column => {
            column.style.display = 'block';
          });
          $this.filterItems.forEach(filterItem => {
            filterItem.classList.remove('active')
          });
          e.target.classList.add('active')
        } else {
          e.target.classList.toggle('active');
          $this.filterItems.forEach(filterItem => {
            if (filterItem.dataset.filter == 'all') {
              filterItem.classList.remove('active')
            }
            if (filterItem.classList.contains('active')) {
              count += 1;
              filterLIst.push(filterItem.dataset.filter);
            }
          });
          if (count > 0) {
            $this.resetFilter.classList.add('active');
            $this.columns.forEach(column => {
              column.style.display = 'none';
            });
          } else {
            $this.resetFilter.classList.remove('active');
            $this.columns.forEach(column => {
              column.style.display = 'block';
            });
          }
          $this.resetFilter.querySelector('span').innerHTML = count;
          for(let i=0;i< $this.columns.length;i++){
            const currentName =  $this.columns[i].dataset.filters;
            for (let j = 0; j < filterLIst.length; j++) {
              const target = filterLIst[j];
              if(currentName.includes(target))  
              {
                  $this.columns[i].style.display = 'block';
              }
            }
          }
        }
      })
    });
    this.resetFilter.addEventListener('click', function (e) {
      e.preventDefault();
      $this.resetFilter.classList.remove('active');
      $this.columns.forEach(column => {
        column.style.display = 'block';
      });
      $this.filterItems.forEach(filterItem => {
        filterItem.classList.remove('active')
      });
    })
  }
}

customElements.define('education-component', EducationComponent);