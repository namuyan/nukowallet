<section class="pre-footer">
  <div class="container">
    <p>NukoWallet.com is a client-side interface &amp; does not hold your keys. </p>
    <p> We cannot access accounts, recover keys, reset passwords, nor reverse transactions.</p>
    <p>
      <span>If you go to a fake NukoWallet.com, they can. Check the URL. Use a bookmark.</span>
      <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal"> You are responsible for your security. </a>
    </p>
  </div>
</section>

<footer class="footer" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

    <section class="footer--left">


      <p><span translate="FOOTER_1">Free, open-source, client-side interface for generating Nuko wallets &amp; more. Interact with the Nekonium blockchain easily &amp; securely. Double-check the URL ( .com ) before unlocking your wallet.</span></p>

      <p> &copy; MyEtherWallet &copy; Oldbeyond </p>

    </section>

    <section class="footer--cent">

        <h5><i aria-hidden="true">(^._.^)ﾉ☆</i> Donations are always appreciated!</h5>
        <p>NUKO: <span class="mono wrap">0x286b52330b188fde4faa9615601fbb2b3c43714e</span></p>
	<p>ETH: <span class="mono wrap">0x5272a9a6611cAfca1B08896179699A74Fc4a5030</span></p>
<!--
        <h5 ng-hide="curLang=='en'"> <i>🏅</i> <span translate="Translator_Desc"> Thank you to our translators </span></h5>
        <p ng-hide="curLang=='en'">
          <span translate="TranslatorName_1"></span>
          <span translate="TranslatorName_2"></span>
          <span translate="TranslatorName_3"></span>
          <span translate="TranslatorName_4"></span>
          <span translate="TranslatorName_5"></span>
        </p>
-->
    </section>

    <section class="footer--righ">

     <p><a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal"> Disclaimer </a></p>
 <!--    <p><a href="http://www.nukowallet.com/signmsg.html" target="_blank" rel="noopener" role="link" tabindex="0">
        Sign Message
      </a></p> -->

      <p>Powered By <a aria-label="website via my ether wallet dot com" href="https://www.MyEtherWallet.com" target="_blank" rel="noopener" role="link" tabindex="0">
        MyEtherWallet.com
      </a></p>

      <p><a aria-label="website via github URL" href="https://kvhnuke.github.io/etherwallet/" target="_blank" rel="noopener" role="link" tabindex="0">
        kvhnuke.github.io/etherwallet
	</a></p>
     <p ng-show="showBlocks">Latest Block#: {{currentBlockNumber}} </p>

    </section>

  </article>

</div>


</footer>

@@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }

</main>
</body>
</html>
