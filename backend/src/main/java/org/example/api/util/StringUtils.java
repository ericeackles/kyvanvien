package org.example.api.util;

import java.text.Normalizer;
import java.util.regex.Pattern;

public class StringUtils {
    public static String removeDiacritics(String s) {
        String normalized = Normalizer.normalize(s, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(normalized).replaceAll("");
    }
}
