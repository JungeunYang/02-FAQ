$(function () {
  // 대상을 변수로 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer');
  const duration = 300;

  // 질문을 클릭했을 대
  $faqQ.on('click', function () {
    // 답변을 보여주자
    $(this).find($faqA).stop().slideDown(duration);
    /* 자손선택자: find 활용법 알아두기 */
  });
});
