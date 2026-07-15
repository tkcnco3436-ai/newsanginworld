(function () {
  "use strict";

  // ---------- 히어로 영상 패널 하단 테스트모니얼 자동 순환 ----------
  var TESTIMONIALS = [
    { avatar: "민", name: "민준 김밥천국", role: "사장님", text: "영상 올리고 나서 방문 예약이 눈에 띄게 늘었어요." },
    { avatar: "서", name: "서연 플라워샵", role: "사장님", text: "사진 한 장이면 끝, 편집할 필요가 없어요." },
    { avatar: "태", name: "태경 오션카페", role: "사장님", text: "1분 30초면 완성이라 매일 새로 올릴 수 있어요." },
    { avatar: "하", name: "하림 편집샵", role: "사장님", text: "세로 영상으로 바로 릴스에 올렸어요." }
  ];

  function initAuthQuote() {
    var mount = document.querySelector("[data-auth-quote]");
    if (!mount) return;

    var textEl = document.createElement("p");
    textEl.className = "auth-quote__text";
    var whoEl = document.createElement("div");
    whoEl.className = "auth-quote__who";
    var dotsEl = document.createElement("div");
    dotsEl.className = "auth-quote__dots";

    TESTIMONIALS.forEach(function (_, i) {
      var dot = document.createElement("span");
      dot.className = "auth-quote__dot";
      dot.dataset.index = i;
      dotsEl.appendChild(dot);
    });

    mount.appendChild(textEl);
    mount.appendChild(whoEl);
    mount.appendChild(dotsEl);

    var dots = dotsEl.querySelectorAll(".auth-quote__dot");
    var current = 0;
    var timer = null;

    function render() {
      var t = TESTIMONIALS[current];
      textEl.classList.remove("is-visible");
      setTimeout(function () {
        textEl.textContent = "“" + t.text + "”";
        whoEl.innerHTML =
          '<div class="auth-quote__avatar">' + t.avatar + "</div>" +
          "<div>" +
            '<div class="auth-quote__name">' + t.name + "</div>" +
            '<div class="auth-quote__role">' + t.role + "</div>" +
          "</div>";
        textEl.classList.add("is-visible");
      }, 160);
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === current); });
    }

    function go(index) {
      current = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
      render();
      resetTimer();
    }

    function resetTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () { go(current + 1); }, 4500);
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () { go(Number(dot.dataset.index)); });
    });

    render();
    resetTimer();
  }

  // ---------- 회원가입 위저드 ----------
  function initWizard() {
    var wizard = document.querySelector("[data-wizard]");
    if (!wizard) return;

    var steps = Array.prototype.slice.call(wizard.querySelectorAll(".wizard-step"));
    var dots = Array.prototype.slice.call(wizard.querySelectorAll(".wizard-dot"));
    var current = 0;

    function render() {
      steps.forEach(function (step, i) { step.classList.toggle("is-active", i === current); });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
        dot.classList.toggle("is-done", i < current);
      });
      if (current === steps.length - 1) fillSummary();
    }

    function validateStep(index) {
      var step = steps[index];
      var fields = step.querySelectorAll("input[required]");
      for (var i = 0; i < fields.length; i++) {
        if (!fields[i].reportValidity()) return false;
      }
      return true;
    }

    function fillSummary() {
      var summary = wizard.querySelector("[data-wizard-summary]");
      if (!summary) return;
      var email = wizard.querySelector('[name="email"]');
      var biz = wizard.querySelector('[name="bizName"]');
      summary.innerHTML =
        '<div class="wizard-summary__row"><span>이메일</span><span>' + (email ? email.value : "") + "</span></div>" +
        '<div class="wizard-summary__row"><span>상호명</span><span>' + (biz ? biz.value : "") + "</span></div>";
    }

    wizard.querySelectorAll("[data-wizard-next]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!validateStep(current)) return;
        if (current < steps.length - 1) { current++; render(); }
      });
    });
    wizard.querySelectorAll("[data-wizard-prev]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (current > 0) { current--; render(); }
      });
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initAuthQuote();
    initWizard();
  });
})();
