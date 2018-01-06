<div class="menu">
      <h2><a href="{dede:field name='typeurl'/}" title="{dede:field name='typename'/}">{dede:field name='typename'/}</a></h2>
      <ul>
             {dede:channel type='son' noself='yes'}
        <li><a href="[field:typelink/]">[field:typename/]</a></li>
            {/dede:channel}
      </ul>
    </div>