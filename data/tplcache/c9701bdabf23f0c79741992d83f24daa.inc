<li ><a href="{dede:field name='typeurl'/}" class="{dede:field.currentstyle/}">{dede:field name='typename'/}</a>
          <ul style="ds{dede:field.typeid function= 'GetTopid(@me)'/}">
    {dede:channel type='son' noself='yes' currentstyle=" <li><a href='~typelink~' class='curr'>~typename~</a> </li>" }       
            <li ><a href="[field:typelink/]">·[field:typename/]</a></li>
    {/dede:channel}
          </ul>
        </li>