<li  class="{dede:field.currentstyle/}" >
            <div class="title"> <a href="{dede:field name='typeurl'/}"> {dede:field name='typename'/}</a></div>
            <div class="slist">
    {dede:channel type='son' noself='yes' currentstyle=" <div class="li lis"><a href='~typelink~' >~typename~</a> </div>" }       
              <div class="li"><a href="[field:typelink/]">·[field:typename/]</a></div>
    {/dede:channel}
            </div>
          </li>