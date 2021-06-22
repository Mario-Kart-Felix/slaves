scrsz = get(0, 'screenSize');
outerpos = [0.2*scrsz(3), 0.2*scrsz(4), 0.8*scrsz(3), 0.8*scrsz(4)];

C_RED = [0.6350, 0.0780, 0.1840];
C_BLUE = [0, 0.447, 0.741];
RED = [0.85, 0.325, 0.098];
BLUE = [0.301, 0.745, 0.933];
GREEN = [0,0.5,0];

C_SIZE = 150;
SIZE = 90;

%% Sanitizer vs biscuits
fig1 = figure('Name','sanit_biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer vs. Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot1 = subplot(1,2,1);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\kappa_2');
title("Sanitizer's parameter space", 'FontSize', 18)

subplot1=subplot(1,2,2);
view(subplot1,[-46.9568093417894 17.8584070779964]);
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\kappa_2');
title("Biscuits' parameter space", 'FontSize', 18)

%% Biscuits
fig2 = figure('Name','biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot1=subplot(1,2,1);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\kappa_2');
title("Biscuits' ground truth", 'FontSize', 18)

subplot1=subplot(1,2,2);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_biscuits(i) == HEALTY
        C(i,:) = RED;
    else
        C(i,:) = BLUE;
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_RED);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_BLUE);
hold off
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\kappa_2');
title("Biscuits' clusters", 'FontSize', 18)

%% Sanitizer
fig3 = figure('Name','sanitizer', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer', 'FontSize', 18, 'FontWeight', 'bold')

subplot1=subplot(1,2,1);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = RED;
    else
        C(i,:) = BLUE;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\kappa_2');
title("Sanitizers' ground truth", 'FontSize', 18)

subplot1 = subplot(1,2,2);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_virus(i) == HEALTY
        C(i,:) = RED;
    else
        C(i,:) = BLUE;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_RED);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_BLUE);
hold off
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\kappa_2');
title("Sanitizers' clusters", 'FontSize', 18, 'FontWeight', 'bold')

%% Parameter correlation
fig4 = figure('Name','par_corr_bisc_h');
tapas_fit_plotCorr(est_biscuits(7))
title('Parameter correlation of biscuits (h)', 'FontSize', 15, 'FontWeight', 'bold');

fig5 = figure('Name','par_corr_virus_h');
tapas_fit_plotCorr(est_virus(7))
title('Parameter correlation of sanitizer (h)', 'FontSize', 15, 'FontWeight', 'bold');

fig6 = figure('Name','par_corr_bisc_a');
tapas_fit_plotCorr(est_biscuits(1))
title('Parameter correlation of biscuits (a)', 'FontSize', 15, 'FontWeight', 'bold');

fig7 = figure('Name','par_corr_virus_a');
tapas_fit_plotCorr(est_virus(1))
title('Parameter correlation of sanitizer (a)', 'FontSize', 15, 'FontWeight', 'bold');

%% Save (from postprocessing or manually set)
if SAVE
    saveas(fig1, ['../img/' get(fig1,'Name') '.jpg']);
    saveas(fig2, ['../img/' get(fig2,'Name') '.jpg']);
    saveas(fig3, ['../img/' get(fig3,'Name') '.jpg']);
    saveas(fig4, ['../img/' get(fig4,'Name') '.jpg']);
    saveas(fig5, ['../img/' get(fig5,'Name') '.jpg']);
    saveas(fig6, ['../img/' get(fig6,'Name') '.jpg']);
    saveas(fig7, ['../img/' get(fig7,'Name') '.jpg']);
    close all
end
