(function () {
    $(document).ready(function () {
        var behanceBgColor, count, dribbbleBgColor, funcHoverLinkAndChangeBodyBg, githubBgColor, linkedinBgColor, mainBgColor, middleHeight, middleOffset, textArray;
        middleHeight = $('.middle').height();
        middleOffset = middleHeight / 2;
        $('.middle').css({ 'margin-top': '-' + middleOffset + 'px' });
        mainBgColor = '#151D20';
        dribbbleBgColor = '#EA4C89';
        behanceBgColor = '#005CFF';
        linkedinBgColor = '#0085AF';
        githubBgColor = '#181818';
        count = 0;
        textArray = [
            'HELLO!',
            'MY NAME IS',
            'FRANCISCO MARIA CALISTO',
            'AND I AM',
            'WEB DEVELOPER'
        ];
        funcHoverLinkAndChangeBodyBg = function (classLink, bgColor) {
            $(classLink).mouseover(function () {
                return $('body').css({ 'background': bgColor });
            });
            $(classLink).click(function () {
                return $('body').css({ 'background': bgColor });
            });
            return $(classLink).mouseleave(function () {
                return $('body').css({ 'background': mainBgColor });
            });
        };
        funcHoverLinkAndChangeBodyBg('a.dribbble', dribbbleBgColor);
        funcHoverLinkAndChangeBodyBg('a.behance', behanceBgColor);
        funcHoverLinkAndChangeBodyBg('a.linkedin', linkedinBgColor);
        funcHoverLinkAndChangeBodyBg('a.github', githubBgColor);
        return $('.clickme').click(function () {
            $('.whoAmI').text(textArray[count]);
            count++;
            if (count === textArray.length) {
                return count = 0;
            }
        });
    });
}.call(this));
